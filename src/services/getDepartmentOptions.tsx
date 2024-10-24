import departments from '../data/dataDepartment.json';

export const getDepartmentOptions = () => {
    return departments.map((department: string) => ({
        label: department,
        value: department,
    }));
};