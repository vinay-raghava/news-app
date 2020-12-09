import { Injectable } from '@angular/core';

enum LogLevel {
    Debug = 'DEBUG',
    Info = 'INFO',
    Warn = 'WARN',
    Error = 'ERROR'
}

@Injectable()
export class LoggingService {
    debug(msg: string, error?: any) {
        this.log(LogLevel.Debug, msg, error);
    }

    info(msg: string, error?: any) {
        this.log(LogLevel.Info, msg, error);
    }

    warn(msg: string, error?: any) {
        this.log(LogLevel.Warn, msg, error);
    }

    error(msg: string, error?: any) {
        this.log(LogLevel.Debug, msg, error);
    }

    /**
     * Console logs the given message.
     * @param level log level
     * @param msg message to log
     * @param _error error
     */
    private log(level: LogLevel, msg: string, _error?: any) {
        let text = new Date() + ': ' + JSON.stringify(msg);
        if (level === LogLevel.Error || level === LogLevel.Warn) {
            console.error(text);
        } else {
            console.log(text);
        }
    }
}
