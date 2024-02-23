import React from "react";
import "./index.scss";
import Sidebar from "../../components/UI/Sidebar/index.js";

const Page = () => {
    return (
        <div className="wrapper">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <div className="right_item_1"></div>
                {/* <div className="right_item_2">
                    <div
                        style={{
                            width: "80%",
                            height: "100%",
                            background: "white",
                            margin: "0 auto",
                            padding: 20,
                            textAlign: "center",
                            boxShadow:
                                "0px 10px 60px rgba(225.83, 236.19, 248.63, 0.50)",
                            borderRadius: 30,
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    width: 84,
                                    height: 84,
                                    left: 0,
                                    top: 0,
                                    position: "absolute",
                                    background: "#FC6736",
                                    borderRadius: 9999,
                                }}
                            />
                            <div
                                style={{
                                    width: 42,
                                    height: 41.65,
                                    left: 21,
                                    top: 21.04,
                                    position: "absolute",
                                    background: "white",
                                }}
                            ></div>
                        </div>
                    </div>
                </div> */}
                <div className="right_item_3">
                    {/* <div
                        style={{
                            width: "90%",
                            height: "100%",
                            margin: "0 auto",
                            padding: 20,
                            textAlign: "center",

                            background: "white",
                            boxShadow:
                                "0px 10px 60px rgba(225.83, 236.19, 248.63, 0.50)",
                            borderRadius: 30,
                        }}
                    ></div> */}
                </div>
            </div>
        </div>
    );
};

export default Page;
