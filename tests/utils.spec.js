import { describe, it, expect } from 'vitest';
import { generateHash, digestMessage } from '../src/utils';

describe('generateHash', () => {
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

describe('digestMessage', () => {
  it('returns a valid SHA-256 hash hex string for a given message', async () => {
    const message = 'hello world';
    const hash = await digestMessage(message);

    expect(typeof hash).toBe('string');
    expect(hash.length).toBe(64); // SHA-256 hash is 64 hex chars

    // Check that hash contains only valid hex characters
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('returns different hashes for different messages', async () => {
    const hash1 = await digestMessage('message one');
    const hash2 = await digestMessage('message two');

    expect(hash1).not.toBe(hash2);
  });

  it('returns the same hash for the same message', async () => {
    const message = 'consistent message';
    const hash1 = await digestMessage(message);
    const hash2 = await digestMessage(message);

    expect(hash1).toBe(hash2);
  });
});
