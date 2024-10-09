import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "./auth"; // Reuse the initialized app

const analytics = getAnalytics(app);

export const logUserEvent = (eventName, params) => {
  logEvent(analytics, eventName, params);
};

export default analytics;
