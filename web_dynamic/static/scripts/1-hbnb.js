$(document).ready(function () {
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
});
