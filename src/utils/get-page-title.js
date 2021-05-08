import defaultSettings from "@/settings";

const title = defaultSettings.title || "Vue FLEET";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
