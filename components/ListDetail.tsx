import * as React from 'react'

import IDataObject from '../common/interfaces';

interface IListDetailProps {
  item: IDataObject;
}

const ListDetail: React.FC<IListDetailProps> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail;
