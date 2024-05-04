import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  {field: "id", headerName: "ID", width: 70},
  {field: "categories", headerName: "Categories", width: 140},
]

const rows = [
  {id: 1, categories: "Coffe"},
  {id: 2, categories: "Non Coffe"},
  {id: 3, categories: "Cake"},
  {id: 4, categories: "Pastry"},
  {id: 5, categories: "Cookie"},
]



const Mydatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable
