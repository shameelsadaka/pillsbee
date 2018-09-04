$(document).ready(function(){
	$("#homeForm").submit(function(){
		var location = $(this).find("input").val();
		localStorage.setItem("location",location);
		window.location = "upload.html";
		return false;
	})

	if(locat = localStorage.getItem("location")){
		$("#locationavailable").html("<b>Delivery available to " + locat + "</b>").show();
	}
	if(username = localStorage.getItem("name")){
		$("#nameavailable").html("Thankyou " + username + ". Your order is under proccess. We will contact you and deliver them asap").show();
	}

	$(".protohideafter").delay(1000).fadeOut();
	$(".protoshowafter").hide().delay(1000).fadeIn();

	$(".cartlistqty").change(function(){
			$this = $(this);
			$(this).closest("td").next("td").html("<b>₹"+($this.val() * parseInt($this.attr("data-price"))) + "</b>");

			var total = 0;
			$(".cartlistqty").each(function(){
				total += $(this).val() * parseInt($(this).attr("data-price")) ;
			});
			$(".totalprice").text("₹"+total)
	});
	$(".contactpost").submit(function(){
		localStorage.setItem("name",$("#username").val());	
	});

});