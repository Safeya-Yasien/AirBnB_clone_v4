$(document).ready(function () {
  $.get("http://0.0.0.0:5001/api/v1/status/", function (data, status) {
    if (data.status == "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  });
  const amenityIds = {};
  $("input[type=checkbox]").change(function () {
    if ($(this).is(":checked")) {
      amenityIds[$(this).data("id")] = $(this).data("name");
    } else {
      delete amenityIds[$(this).data("id")];
    }
    updateAmenity();
  });

  function updateAmenity() {
    const amenityObjectValues = Object.values(amenityIds);

    if (amenityObjectValues.length > 0) {
      $(".amenities h4").html(amenityObjectValues.join(", "));
    } else {
      $(".amenities h4").html("&nbsp;");
    }
  }

  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search",
    contentType: "application/json",
    data: JSON.stringify({}),
    success: function (result) {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        const place = result[i];
        const article = $("<article></article>");
      }
    },
  });
});
