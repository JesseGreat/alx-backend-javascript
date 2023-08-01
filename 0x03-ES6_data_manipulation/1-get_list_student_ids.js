export default function getListStudentIds(obj) {
  if (Array.isArray(obj)) {
    const arrayOfIds = obj.map((ids) => ids.id);
    return arrayOfIds;
  }

  return [];
}
