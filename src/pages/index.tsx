import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { SimpleCard } from "../components/common/card/SimpleCard";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [collpased, setCollpased] = useState(false);

  const handleSidebarStatus = (status: boolean) => {
    setCollpased(status);
  };

  return (
    <>
      <div className="wrapper">
        <nav
          id="sidebar"
          className={
            collpased ? "sidebar js-sidebar" : "sidebar js-sidebar collapsed"
          }
        >
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">PoolMaster</span>
            </a>
            <Sidebar />
          </div>
        </nav>

        <div className="main">
          <Navbar handleSidebarStatus={handleSidebarStatus} />

          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h3 mb-3">
                <strong>Analytics</strong> Dashboard
              </h1>

              <div className="row">
                <div className="col-xl-6 col-xxl-5 d-flex">
                  <div className="w-100">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card" style={{ borderRadius: 20 }}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Sales</h5>
                              </div>

                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="truck"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">2.382</h1>
                            <div className="mb-0">
                              <span className="text-danger">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                -3.65%{" "}
                              </span>
                              <span className="text-muted">
                                Since last week
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card" style={{ borderRadius: 20 }}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Visitors</h5>
                              </div>

                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="users"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">14.212</h1>
                            <div className="mb-0">
                              <span className="text-success">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                5.25%{" "}
                              </span>
                              <span className="text-muted">
                                Since last week
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <SimpleCard />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-xxl-7">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                      <div className="chart chart-sm">
                        <canvas id="chartjs-dashboard-line"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Browser Usage</h5>
                    </div>
                    <div className="card-body d-flex">
                      <div className="align-self-center w-100">
                        <div className="py-3">
                          <div className="chart chart-xs">
                            <canvas id="chartjs-dashboard-pie"></canvas>
                          </div>
                        </div>

                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <td>Chrome</td>
                              <td className="text-end">4306</td>
                            </tr>
                            <tr>
                              <td>Firefox</td>
                              <td className="text-end">3801</td>
                            </tr>
                            <tr>
                              <td>IE</td>
                              <td className="text-end">1689</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Real-Time</h5>
                    </div>
                    <div className="card-body px-4">
                      <div id="world_map" style={{ height: "350px" }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Calendar</h5>
                    </div>
                    <div className="card-body d-flex">
                      <div className="align-self-center w-100">
                        <div className="chart">
                          <div id="datetimepicker-dashboard"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <table className="table table-hover my-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="d-none d-xl-table-cell">Start Date</th>
                          <th className="d-none d-xl-table-cell">End Date</th>
                          <th>Status</th>
                          <th className="d-none d-md-table-cell">Assignee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Project Apollo</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            Vanessa Tucker
                          </td>
                        </tr>
                        <tr>
                          <td>Project Fireball</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-danger">Cancelled</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            William Harris
                          </td>
                        </tr>
                        <tr>
                          <td>Project Hades</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            Sharon Lessman
                          </td>
                        </tr>
                        <tr>
                          <td>Project Nitro</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-warning">
                              In progress
                            </span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            Vanessa Tucker
                          </td>
                        </tr>
                        <tr>
                          <td>Project Phoenix</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            William Harris
                          </td>
                        </tr>
                        <tr>
                          <td>Project X</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            Sharon Lessman
                          </td>
                        </tr>
                        <tr>
                          <td>Project Romeo</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-success">Done</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            Christina Mason
                          </td>
                        </tr>
                        <tr>
                          <td>Project Wombat</td>
                          <td className="d-none d-xl-table-cell">01/01/2021</td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                          <td>
                            <span className="badge bg-warning">
                              In progress
                            </span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            William Harris
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Monthly Sales</h5>
                    </div>
                    <div className="card-body d-flex w-100">
                      <div className="align-self-center chart chart-lg">
                        <canvas id="chartjs-dashboard-bar"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a
                      className="text-muted"
                      href="https://adminkit.io/"
                      target="_blank"
                    >
                      <strong>PoolMaster</strong>
                    </a>{" "}
                    &copy;
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Support
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Help Center
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
