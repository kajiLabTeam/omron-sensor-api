import { configure, getLogger } from "log4js";
import path from "path";
import util from "util";

export function settingLogger() {
  const logDirectory = path.join(process.cwd(), "logs");
  const logLayout = {
    type: "pattern",
    pattern: "%d %p %c %f:%l %x{singleLine}",
    tokens: {
      singleLine: function (logEvent: { data: Array<unknown> }) {
        return logEvent.data
          .map((d) => {
            if (
              typeof d === "boolean" ||
              typeof d === "number" ||
              typeof d === "string"
            ) {
              return d.toString().replace(/\n/gm, "\\n");
            } else {
              return util
                .inspect(d, { breakLength: Infinity })
                .replace(/\n/gm, "\\n");
            }
          })
          .filter((d) => d.length > 0)
          .join(" ");
      },
    },
  };

  configure({
    appenders: {
      console: {
        type: "console",
        layout: logLayout,
      },
      app: {
        type: "dateFile",
        layout: logLayout,
        filename: path.join(logDirectory, "app.log"),
        pattern: "-yyyy-MM-dd",
        numBackups: 5, // the number of old log files to keep
        maxLogSize: 10 * 1024 * 1024, // 10 MB
        compress: true,
      },
    },
    categories: {
      default: {
        appenders: ["console", "app"],
        level: "all",
        enableCallStack: true,
      },
    },
  });
}

export const customLogger = (message: string, ...rest: string[]) => {
  getLogger().info(message, ...rest)
}