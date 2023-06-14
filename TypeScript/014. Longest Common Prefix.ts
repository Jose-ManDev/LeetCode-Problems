function longestCommonPrefix(strs: string[]): string {
    let shortestString = strs.reduce((a, b) => a.length <= b.length ? a : b);
    let commonPrefix = '';

    for (let i = 0; i < shortestString.length; i++) {
        let prefix = shortestString.substring(0, i + 1);

        if (strs.every(string => string.substring(0, i + 1).includes(prefix))) {
            commonPrefix = prefix;
        }
    }

    return commonPrefix;
};