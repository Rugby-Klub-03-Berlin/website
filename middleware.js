import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!admin|_next|_vercel|.*\\..*).*)", "/(de|en|fr)/:path*"],
};
