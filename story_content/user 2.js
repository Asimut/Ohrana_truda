function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65pGaEShKk3":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var myName = lmsAPI.GetStudentName();
var array = myName.split(' ');
var newName = array[1]
player.SetVar("newName", newName);

}

