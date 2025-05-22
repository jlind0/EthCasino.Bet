export function fromUnixTimestamp(timestamp: bigint | number | undefined): Date | undefined {
    if (timestamp === undefined) {
        return undefined;
    }
    const seconds = typeof timestamp === "bigint" ? Number(timestamp) : timestamp;
    return new Date(seconds * 1000); // Multiply by 1000 to convert seconds to milliseconds
}
