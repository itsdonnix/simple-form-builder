import { describe, it, expect } from 'vitest';
import { generateHash } from '../src/utils';

describe('utils.js', () => {
  it('generateHash returns a SHA-256 hash string for a given date', async () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const hash = await generateHash(date);

    // SHA-256 produces a 256-bit hash = 32 bytes = 64 hex chars
    expect(typeof hash).toBe('string');
    expect(hash.length).toBe(64);

    // All chars should be valid hex chars
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('generateHash returns different hashes for different dates', async () => {
    const date1 = new Date('2023-01-01T00:00:00Z');
    const date2 = new Date('2023-01-02T00:00:00Z');

    const hash1 = await generateHash(date1);
    const hash2 = await generateHash(date2);

    expect(hash1).not.toBe(hash2);
  });

  it('generateHash uses current date if no argument is provided', async () => {
    const hash1 = await generateHash();
    // Wait a tiny bit to ensure time difference (optional)
    await new Promise((r) => setTimeout(r, 100));
    const hash2 = await generateHash();

    // Since time passes between calls, hashes should likely differ
    expect(hash1).not.toBe(hash2);
  });
});
