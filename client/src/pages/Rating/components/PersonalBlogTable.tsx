import React from 'react';
import TableItem from "./TableItem";
import ContainerTable from "./ContainerTable";


const PersonalBlogTable = (props: any) => {
    return (
        <ContainerTable header_title={'Личные блоги'}>
            <TableItem />
            <TableItem />
            <TableItem />
        </ContainerTable>
    );
};

export default React.memo(PersonalBlogTable);