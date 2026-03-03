import { Template, TemplateParameterInfo } from '../types/whatsapp';
/**
 * Extracts parameter information from a WhatsApp template
 */
export declare function getTemplateParameters(template: Template): TemplateParameterInfo;
/**
 * Converts user input to the appropriate format for the template
 */
export declare function formatParametersForTemplate(parameterInfo: TemplateParameterInfo, values: Record<string, string>): string[] | Record<string, string>;
/**
 * Checks if a template requires parameters
 */
export declare function templateHasParameters(template: Template): boolean;
