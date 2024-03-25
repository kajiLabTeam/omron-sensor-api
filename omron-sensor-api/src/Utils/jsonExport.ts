
export function jsFriendlyJSONStringify(s:object): string {
    return JSON.stringify(s).replace(/\\/g, '');;
}