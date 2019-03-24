import { connect } from "react-redux";

const mapStateToProps = state => ({ isLoading: state.tasks.status === "LOADING" });

export const tabMenuConnector = connect(mapStateToProps);
