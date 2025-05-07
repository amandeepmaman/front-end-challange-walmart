import { renderHook, act } from "@testing-library/react";
import useTimer from "../../hooks/useTimer";

describe("useTimer hook", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should initialize with 0 seconds", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);
  });

  it("should increment seconds every second", () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(1);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe(3);
  });

  it("should reset timer to 0", () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      jest.advanceTimersByTime(3000);
      result.current.reset();
    });

    expect(result.current.seconds).toBe(0);
  });
});
