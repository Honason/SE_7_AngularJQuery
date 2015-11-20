$.ajax({url: "./api/member/", dataType: 'json', success: function(members){
    //$('table').html("");
    console.log(members);

    for (var i = 0; i < members.length; i++) {
        $('tbody').append("<tr id='" + members[i].id + "'></tr>");
        if (members[i].name) {
            $('tr#'+members[i].id).append("<td>"+members[i].name+"</td>");
        }
        if (members[i].email) {
            $('tr#'+members[i].id).append("<td>"+members[i].email+"</td>");
        }
        if (members[i].age) {
            $('tr#'+members[i].id).append("<td>"+members[i].age+"</td>");
        }
        if (members[i].eyeColor) {
            $('tr#'+members[i].id).append("<td>"+members[i].eyeColor+"</td>");
        }
        if (members[i].friends) {
            $('tr#'+members[i].id).append("<td>"+members[i].friends.length+"</td>");
        }
        //
        // if (addresses[i].street) {
        //     $('table').append("<td>"+addresses[i].street+"</td>");
        // }
        //
        // if (addresses[i].city) {
        //     $('table').append("<td>"+addresses[i].city+"</td>");
        // }
    }
}});
