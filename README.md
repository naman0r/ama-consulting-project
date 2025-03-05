# AMA Consultng project.

- [link to task document](https://docs.google.com/document/d/1Bu-ZWDktk7AdilxEV8L8Vtd-l4bZclC0S5HeYbiPFHc/edit?tab=t.0#heading=h.aph1q9yeitrv)
- [github repo](https://github.com/naman0r/ama-consulting-project)

- Group members: **Rishi Dilip, Ioanna Damianov, Krisha Dani, Madhav Nair, Naman Rusia**
- Group Liason: Ayush

## Tech Stack and implementaton:

- Backend: Flask / FastAPI (Python) or Express.js (Node.js)
- Database: Supabase (Easiest)
- Frontend: React.js (easiest)
- Slack Integration: Slack API + Webhooks for automated messages
- Hosting: Firebase? dont worry about it for now.

## backend API endpoints:

- /users/ GET List all users
- /users/{id} GET Get user details
- /fun_facts/ GET Retrieve all fun facts
- /fun_facts/ POST Submit fun facts
- /ama/select POST Randomly selects a user
- /ama/announce POST Sends Slack message
- /ama/history GET Get past AMA details
- /admin/override POST Manually select AMA

## Slack Integration;

- [basic tutorial on how to create a slackbot](https://www.kubiya.ai/resource-post/how-to-build-a-slackbot-with-python)
