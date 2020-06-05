# JSMemoryTracker

Helpful to find JS heap size on browsers.

Maximum numbers it tries to allocate is 2GB for high end devices and 500MB for low end devices.

Page crashes/reloads when Used JS heap size exceeds max defined limit.

Allocation URL: https://narenkum.github.io/JSMemoryTracker

To test on low-end devices pass "slow" flag which wil allocates memory in slow rate.
  e.g https://narenkum.github.io/JSMemoryTracker?slow
