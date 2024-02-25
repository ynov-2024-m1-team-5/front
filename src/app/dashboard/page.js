import React from "react";
import "./index.scss";
import Sidebar from "../../components/UI/Sidebar/index.js";
import Table from "../../components/UI/Table/index.js";

const Page = () => {
    return (
        <div className="wrapper">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <div className="right_item_1">
                    <h1 className="title_admin">Hello Admin👌</h1>
                    <button className="button">Add product</button>
                </div>
                <div className="right_item_2">
                    <div className="item_2">
                        <div className="items">
                            <p className="title">Totals products</p>
                            <p className="number">100</p>
                        </div>
                        <div className="items">
                            <p className="title">Clients</p>
                            <p className="number">100</p>
                        </div>
                        <div className="items">
                            <p className="title">Active Now</p>
                            <p className="number">57</p>
                        </div>
                    </div>
                </div>
                <div className="right_item_3">
                    <div className="item_3">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
