export const auditingMixin = {
  _documentVersion: { type: Number, required: true, default: 1 },
  _createdAt: { type: Date, required: true, default: Date.now },
  _updatedAt: { type: Date, required: true, default: Date.now },
};
