const TASK_TYPE = {
  FEATURE: "feature",
  GROUP: "group",
  STORY: "story",
};

const TASK_STATUS = {
  // old task workflow
  ACTIVE: "IN_PROGRESS",
  "HIGH PRIORITY": "HIGH PRIORITY",
  PENDING: "IN_PROGRESS",
  ASSIGNED: "ASSIGNED",
  BLOCKED: "BLOCKED",
  COMPLETED: "COMPLETED",

  // new task workflow
  IN_PROGRESS: "IN_PROGRESS",
  UNASSIGNED: "AVAILABLE",
  AVAILABLE: "AVAILABLE",
  SMOKE_TESTING: "SMOKE_TESTING",
  NEEDS_REVIEW: "NEEDS_REVIEW",
  IN_REVIEW: "IN_REVIEW",
  APPROVED: "APPROVED",
  MERGED: "MERGED",
  SANITY_CHECK: "SANITY_CHECK",
  REGRESSION_CHECK: "REGRESSION_CHECK",
  RELEASED: "RELEASED",
  VERIFIED: "VERIFIED",
};

const TASK_STATUS_OLD = {
  OLD_ACTIVE: "active",
  OLD_BLOCKED: "blocked",
  OLD_PENDING: "pending",
  OLD_COMPLETED: "completed",
};

module.exports = { TASK_TYPE, TASK_STATUS, TASK_STATUS_OLD };