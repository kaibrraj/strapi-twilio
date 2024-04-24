module.exports = {
    // 1
    async beforeUpdate(event) {
      // 2
      const { params } = event;
  
      // 3
    //   const entry = await strapi.entityService.findOne(
    //     "api::task.task",
    //     params.where.id,
    //     {
    //       populate: { user: true },
    //     }
    //   );
  
      // 4
    //  if (entry.user && entry.user.phoneNumber && entry.user.id !== params.data.user) {
      //  const body = `You have been unassigned from task - "${entry.title}".`;
        strapi.service("api::article.sms").sendSMS({
            to: '343534534'
          });
     // }
    },
  
    // 5
    afterUpdate(event) {
      // 6
      const { result } = event;
  
      // 7
     // if (result.user && result.user.phoneNumber) {
       // const body = `You have been assigned a new task - "${result.title}" which is due on ${result.dueDate}.`;
        strapi.service("api::article.sms").sendSMS({
            to: '343534534'
          });
     // }
    },
  
    // 8
    async afterCreate(event) {
      const { result } = event;
  
     // if (result.user && result.user.phoneNumber) {
      //  const body = `You have been assigned a new task - "${result.title}" which is due on ${result.dueDate}.`;
        strapi.service("api::article.sms").sendSMS({
          to: '343534534'
        });
      //}
    },
  };
  