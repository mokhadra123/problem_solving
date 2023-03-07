/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  const reValidIpv4 =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
  const reValidIpv6 = /^([\da-f]{1,4}:){7}([\da-f]{1,4})$/gi;

  let validIpv4 = queryIP.match(reValidIpv4);
  let validIpv6 = queryIP.match(reValidIpv6);

  if (validIpv4) {
    console.log("IPv4");
  } else if (validIpv6) {
    console.log("IPv6");
  } else {
    console.log("Neither");
  }
};
