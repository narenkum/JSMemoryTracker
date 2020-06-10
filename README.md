# JSMemoryTracker

Helpful to find JS heap size on browsers.

Maximum numbers it tries to allocate is 2GB for high end devices and 1GB for low end devices.

Page crashes/reloads when Used JS heap size exceeds max defined limit.

Allocation URL: https://narenkum.github.io/JSMemoryTracker

To test on low-end devices pass "slow" flag which will allocate memory in slow pace.
  e.g https://narenkum.github.io/JSMemoryTracker?slow
