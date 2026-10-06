const memberData =
    JSON.parse(localStorage.getItem("mascMember"));


if (!memberData) {

    window.location.href = "register.html";

} else {

    document.getElementById("memberName").innerText =
        memberData.name;

    document.getElementById("memberId").innerText =
        memberData.memberId;

    document.getElementById("memberAge").innerText =
        memberData.age;

    document.getElementById("memberPhone").innerText =
        memberData.phone;

    document.getElementById("memberEmail").innerText =
        memberData.email;

    document.getElementById("memberInterest").innerText =
        memberData.interest;

    document.getElementById("memberPhoto").src =
        memberData.photo;

}