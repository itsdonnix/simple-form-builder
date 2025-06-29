import { describe, it, beforeEach, vi, expect } from 'vitest';
import * as utils from '../src/utils';
import { getSessionID, setSessionID, generateSessionId } from '../src/session';

// Mock sessionStorage for test environment
const mockSessionStorage = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

describe('session.js', () => {
  const TEST_ID = 'test-session-id';

  beforeEach(() => {
    vi.stubGlobal('sessionStorage', mockSessionStorage);
    sessionStorage.clear();
    vi.restoreAllMocks();
  });

  it('should return null if no session is set', () => {
    expect(getSessionID()).toBeNull();
  });

  it('should store and retrieve session ID', () => {
    setSessionID(TEST_ID);
    expect(getSessionID()).toBe(TEST_ID);
  });

  it('should generate and store a new session ID if none exists', async () => {
    const mockHash = 'mock-generated-id';
    vi.spyOn(utils, 'generateHash').mockReturnValue(mockHash);

    const id = await generateSessionId();
    expect(id).toBe(mockHash);
    expect(getSessionID()).toBe(mockHash);
  });

  it('should return existing session ID if already present', async () => {
    setSessionID(TEST_ID);
    const id = await generateSessionId();
    expect(id).toBe(TEST_ID);
  });
});
