declare module 'react-table' {
    export function useTable<T extends Record<string, unknown>>(options: {
        columns: Array<{
            Header: string;
            accessor: keyof T;
        }>;
        data: T[];
    }): {
        getTableProps: () => React.TableHTMLAttributes<HTMLTableElement>;
        getTableBodyProps: () => React.HTMLProps<HTMLElement>;
        headerGroups: Array<{
            getHeaderGroupProps: () => React.HTMLProps<HTMLElement>;
            headers: Array<{
                getHeaderProps: () => React.HTMLProps<HTMLElement>;
                render: (type: 'Header' | 'Cell') => React.ReactNode;
            }>;
        }>;
        rows: Array<{
            getRowProps: () => React.HTMLProps<HTMLElement>;
            cells: Array<{
                getCellProps: () => React.HTMLProps<HTMLElement>;
                render: (type: 'Cell') => React.ReactNode;
            }>;
        }>;
        prepareRow: (row: { getRowProps: () => React.HTMLProps<HTMLElement> }) => void;
    };
}
