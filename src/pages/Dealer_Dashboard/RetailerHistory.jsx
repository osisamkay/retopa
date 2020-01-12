import React from "react"
import { Table, Icon, Input, Select, Pagination, Tabs } from "antd"
import { ColumnsTwo, TableTwo } from "../../components/Constants/Tableone"
import "../../scss/Retailer.scss"
import { HistoryColumn, History } from "../../components/Constants/historyTable"

const { Option } = Select

const RetailerHistory = () => {
  return (
    <div>
      <div
        className="table_container"
        style={
          HistoryColumn.length <= 9 ? { height: "100vh" } : { height: "auto" }
        }
      >
        <div className="table_Group">
          <div className="table_header">
            <div className="rowShow">
              <Select
                defaultValue="10"
                style={{ width: 70 }}
                // onChange={handleChange}
              >
                <Option value="10">10</Option>
                <Option value="15">15</Option>
                <Option value="20">20</Option>
                <Option value="25">25</Option>
              </Select>
              <h4>Records per page</h4>
            </div>
            <div className="searchTable">
              <Input
                placeholder="Search Retailer…"
                prefix={<Icon type="search" style={{ color: "#D8D8D8" }} />}
              />
            </div>
          </div>
          <Table
            columns={HistoryColumn}
            dataSource={History}
            bordered
            size="small"
          />
          {/* <Pagination
            total={TableOne.length}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            pageSize={10}
            defaultCurrent={1}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default RetailerHistory
