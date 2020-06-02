import React, { useEffect } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom'

const Redirect = (props) => {
  const code = props.match.params.code;
  
  useEffect(() => {
    const baseUrl = "https://smll-url.herokuapp.com/api/url"
    axios.get(`${baseUrl}/${code}`).then((res) => {
      window.location.href = res.data;
    }).catch((err) => {
      props.history.push('/error/404');
    });
  }, [code]);

  return (
    <div>
      <h1>Redirecting to the original Website</h1>
    </div>
  );
};

export default withRouter(Redirect);
