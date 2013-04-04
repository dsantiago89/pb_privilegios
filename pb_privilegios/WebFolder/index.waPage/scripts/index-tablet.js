
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
    var emp = ds.Usuarios.newEntity(); // create the entity
    var usuario=textField1;
    emp.user.setValue(usuario); // assigning storage attributes
    var password=textField2
    emp.pwd.setValue(password);
    var grupo=select1;
    emp.Id_grupo.setValue(grupo);
   
    emp.save({
        onSuccess:function(event)
        {
            $("#display").html("saved ok"); // display the result in a Container widget
        },
            onError:function(event)
        {
            $("#display").html("error on save");
        }
    });
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
