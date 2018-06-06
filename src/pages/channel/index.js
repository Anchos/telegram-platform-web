import { connect } from "react-redux";
import { getLocationPayload } from "src/selectors/location";
import { makeGetChannelByName } from "src/selectors/channel";
import Channel from "./channel";

function mapStateToProps() {
  const getChannelByName = makeGetChannelByName();

  return state => {
    const payload = getLocationPayload(state);
    const channel = getChannelByName(state, { username: payload.name });

    return { ...channel };
  };
}

export default connect(mapStateToProps)(Channel);
