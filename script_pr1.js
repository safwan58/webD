$(function(){
    let inpNewTask=$('#inpNewTask')
    let btnAdd=$('#btnAdd')
    let btnReset=$('#btnReset')
    let btnSort=$('#btnSort')
    let btnCleanup=$('#btnCleanup')
    let ulTasks=$('#ulTasks')

    function addItem(){
        let listItem=$('<li>',{
            'class':'list-group-item',
            text:inpNewTask.val()
        })
        listItem.click(function(){
            listItem.toggleClass('done')
        })
        ulTasks.append(listItem)
        inpNewTask.val('')
        bttStat()
    }

   function clearDone(){
       $('#ulTasks .done').remove()
       bttStat()
   }

   function sortTasks(){
       $('#ulTasks .done').appendTo(ulTasks)
   }

   function bttStat(){
           btnAdd.prop('disabled',inpNewTask.val()=='')
           btnReset.prop('disabled',inpNewTask.val()=='')
           btnSort.prop('disabled',ulTasks.children().length < 1)
           btnCleanup.prop('disabled',ulTasks.children().length < 1)
   }

   inpNewTask.on('input',bttStat)

    inpNewTask.keypress(function(e){
        if(e.which==13) addItem()
    })

    btnAdd.click(addItem)

    btnReset.click(function(){
        inpNewTask.val('')
        bttStat()
    })

    btnCleanup.click(clearDone)

    btnSort.click(sortTasks)
})