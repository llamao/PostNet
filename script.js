var variable;


var settings_list = {
    async: true,
    crossDomain: true,
    url: 'https://eu-west-1.aws.data.mongodb-api.com/app/postnetwork-aedph/endpoint/UCP',
    data: {

    },
    headers: {},
    method: "GET"
  };
  $.ajax(settings_list).done(function (response) {

    var dataTemplate = $('.new').children().eq(0).prop('outerHTML');
    $('.new').children().eq(0).hide();
  var buildCollectionBasedOnAPI = true;
  console.log(response);
if (Array.isArray(response)) {

    var parentCollectionClass = '.new *:last-child';
    response.forEach((item) => {
    var dataTemplateActual = dataTemplate;
      dataTemplateActual = dataTemplateActual.replaceAll("[subject]", item.Subject).replaceAll("[subject]", item.Subject==undefined ? "" : item.Subject);
  dataTemplateActual = dataTemplateActual.replaceAll("[content]", item.Content).replaceAll("[content]", item.Content==undefined ? "" : item.Content);
  dataTemplateActual = dataTemplateActual.replaceAll("[img]", item.Image).replaceAll("[img]", item.Image==undefined ? "" : item.Image);
  dataTemplateActual = dataTemplateActual.replaceAll("[user]", item.UserID).replaceAll("[user]", item.UserID==undefined ? "" : item.UserID);

    $('.new').append(dataTemplateActual);

  });
  }

  });
