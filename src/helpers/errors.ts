/* eslint-disable @typescript-eslint/no-explicit-any */
export const getErrorMessage = (error: any): string => {
  const pick = (...cands: any[]) =>
    cands.find((c) => typeof c === "string" && c.trim())?.trim();

  if (!error) return "Server unavailable";
  if (typeof error === "string") return error;
  if (error?.message && typeof error.message === "string") return error.message;

  // RTK Query / Axios style containers
  const data = error?.data ?? error?.response?.data ?? error;

  // Top-level common shapes
  const topMsg = pick(data?.message, data?.error);
  if (topMsg) return topMsg;

  // detail can be string or object
  const detail = data?.detail;
  if (typeof detail === "string") return detail;

  if (detail && typeof detail === "object") {
    // arrays like detail.details: [{field: "msg"}]
    if (Array.isArray(detail?.details)) {
      const msgs = detail.details
        .flatMap((item: any) => Object.values(item))
        .filter((v: any) => typeof v === "string");
      if (msgs.length) return msgs.join(". ");
    }
  }

  if (error?.success === false && typeof error?.error === "string") {
    return error.error;
  }

  if (error?.status) return `Request failed (status ${error.status})`;

  try {
    return JSON.stringify(data);
  } catch {
    return "Server unavailable";
  }
};
