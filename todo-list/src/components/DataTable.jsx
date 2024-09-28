import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className="slds-table_edit_container slds-is-relative">
      <table
        aria-multiselectable="true"
        className="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols"
        role="grid"
        aria-label="To-Do List Table"
      >
        <thead>
          <tr className="slds-line-height_reset">
            <th className="slds-text-align_center" scope="col">
              <span>Select</span>
            </th>
            <th aria-sort="none" scope="col">
              <div className="slds-truncate" title="Title">Title</div>
            </th>
            <th aria-sort="none" scope="col">
              <div className="slds-truncate" title="Description">Description</div>
            </th>
            <th aria-sort="none" scope="col">
              <div className="slds-truncate" title="Status">Status</div>
            </th>
          </tr>
        </thead>
        <tbody className="slds-text-color_default"> 
          {data.map((item) => (
            <tr key={item.id}>
              <td className="slds-text-align_center">
                <input type="checkbox" aria-label={`Select ${item.title}`} />
              </td>
              <th scope="row">
                <div className="slds-truncate" title={item.title}>
                  {item.title}
                </div>
              </th>
              <td>
                <div className="slds-truncate" title={item.description}>
                  {item.description}
                </div>
              </td>
              <td>
                <div className="slds-truncate" title={item.status ? 'Completed' : 'Pending'}>
                  {item.status ? 'Completed' : 'Pending'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
