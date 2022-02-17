import React from 'react';
import ContainerTable from "./ContainerTable";
import TableItem from "./TableItem";


const CommunityTable = (props: any) => {
    return (
        <ContainerTable header_title={'Сообщества'}>
            <TableItem />
            <TableItem />
            <TableItem />
        </ContainerTable>
    );
};

export default React.memo(CommunityTable);