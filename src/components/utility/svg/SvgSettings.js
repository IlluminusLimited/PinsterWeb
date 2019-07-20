import React from 'react';

const SvgSettings = props => {
  let classList = 'svg-settings' + (props.classList ? ' ' + props.classList : '');

  return (
    <svg className={classList} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.337 28.235">
      <path
        className="lines"
        d="M10.787 28.331c-.128-.677-.257-1.349-.38-2.026-.031-.159-.062-.314-.088-.473a.15.15 0 0 0-.119-.132c-.509-.186-1.022-.354-1.513-.575a11.5 11.5 0 0 1-3.215-2.149.184.184 0 0 0-.217-.049c-.787.283-1.575.557-2.371.836L0 18.769l.372-.318C.9 18 1.415 17.557 1.937 17.114a.119.119 0 0 0 .04-.137c-.1-.469-.208-.938-.292-1.406a7.905 7.905 0 0 1-.08-2.119 14.385 14.385 0 0 1 .363-1.986.153.153 0 0 0-.053-.177C1.3 10.768.69 10.241.075 9.715.049 9.693.027 9.671 0 9.644l2.884-4.993c.146.049.292.1.433.15l1.95.69a.171.171 0 0 0 .195-.04 11.928 11.928 0 0 1 4.732-2.733.146.146 0 0 0 .119-.128c.146-.8.3-1.6.451-2.4a.647.647 0 0 1 .023-.09h5.767c.049.248.093.491.137.734.111.588.221 1.172.327 1.76.013.08.049.106.124.128a11.5 11.5 0 0 1 3.445 1.685c.447.323.862.694 1.287 1.048a.18.18 0 0 0 .195.044l2.282-.809c.031-.009.062-.022.1-.035l2.884 4.993c-.159.137-.318.274-.473.411-.482.411-.964.827-1.446 1.238a.134.134 0 0 0-.053.15c.106.513.226 1.022.31 1.539a7.456 7.456 0 0 1 .062 1.959 14.33 14.33 0 0 1-.376 2.034.121.121 0 0 0 .049.142l1.862 1.592a.409.409 0 0 1 .062.062c-.96 1.663-1.919 3.322-2.888 4.993-.172-.057-.341-.119-.509-.177-.628-.221-1.26-.442-1.889-.668a.136.136 0 0 0-.168.035 11.866 11.866 0 0 1-3.795 2.41c-.314.124-.637.23-.96.332a.145.145 0 0 0-.115.128c-.142.77-.287 1.535-.429 2.3l-.04.2c-1.904.003-3.828.003-5.752.003zm13.967-9.115c-.526-.456-1.044-.9-1.566-1.34a.129.129 0 0 1-.049-.168 10.892 10.892 0 0 0 .606-3.1 10.3 10.3 0 0 0-.142-2.119 13.624 13.624 0 0 0-.46-1.778.128.128 0 0 1 .044-.164c.416-.354.831-.712 1.247-1.07.106-.093.212-.181.318-.274-.407-.7-.8-1.393-1.2-2.088-.035.013-.071.022-.1.031-.619.217-1.238.433-1.858.655a.123.123 0 0 1-.159-.04c-.226-.243-.451-.491-.69-.721a9.862 9.862 0 0 0-4.062-2.44c-.429-.133-.871-.226-1.3-.336-.049-.013-.1-.018-.111-.088-.084-.473-.172-.942-.261-1.415-.04-.217-.084-.433-.124-.646h-2.41a.164.164 0 0 0-.009.04c-.128.663-.257 1.331-.376 1.995-.013.066-.035.1-.1.111-.2.044-.4.1-.606.142a10 10 0 0 0-4.2 2.11 13.752 13.752 0 0 0-1.277 1.261.1.1 0 0 1-.128.035L4.4 7.318c-.2-.071-.4-.137-.6-.208-.407.7-.8 1.4-1.207 2.092.035.031.057.053.084.075q.736.637 1.477 1.265a.127.127 0 0 1 .046.158 10.916 10.916 0 0 0-.6 3.1 10.37 10.37 0 0 0 .142 2.127 12.926 12.926 0 0 0 .464 1.787.112.112 0 0 1-.035.137c-.376.318-.747.637-1.119.955-.15.133-.305.261-.46.4.407.7.8 1.4 1.207 2.088l.057-.013c.619-.217 1.238-.433 1.858-.659a.176.176 0 0 1 .23.053 12.635 12.635 0 0 0 1.247 1.234 9.909 9.909 0 0 0 3.709 1.977c.354.1.716.177 1.075.265.049.013.093.018.106.084.053.292.106.579.164.871l.226 1.194h2.415c.128-.686.261-1.367.385-2.048a.1.1 0 0 1 .093-.1c.181-.04.358-.084.54-.124a10.086 10.086 0 0 0 3.786-1.738 11.767 11.767 0 0 0 1.747-1.636.125.125 0 0 1 .164-.04c.208.08.425.15.632.226.438.155.88.31 1.322.464.394-.696.797-1.39 1.199-2.089z"
        transform="translate(0 -.1)"
      />
      <path
        className="lines"
        d="M172.3 188.349a6.05 6.05 0 1 1 6.033 6.05 6.07 6.07 0 0 1-6.033-6.05zm6.055-4.034a4.034 4.034 0 1 0 4.029 4.038 4.018 4.018 0 0 0-4.03-4.037z"
        transform="translate(-164.679 -174.236)"
      />
    </svg>
  );
};

export default SvgSettings;
