// Angular imports
import { PipeTransform, Pipe } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
    name: 'formValidationMessages'
})
export class FormValidationMessagesPipe implements PipeTransform {
    /**
     * Transforms validation errors to human readable format
     * @description If custom error message for a specific error found, the same will be returned
     * else if default error message for the error found, the default error message will be returned
     * else the empty string is returned
     * @param validationErrors holds the validation errors from the control
     * @param customErrorMessages holds the custom error messages for the control
     */
    public transform(validationErrors: ValidationErrors | null, customErrorMessages?: ValidationErrors) {
        if (!validationErrors || Object.keys(validationErrors).length === 0) {
            return '';
        }
        const messageKey: string = Object.keys(validationErrors)[0];

        if (customErrorMessages && customErrorMessages[messageKey]) {
            return customErrorMessages[messageKey];
        }

        return messageKey;
    }
}
