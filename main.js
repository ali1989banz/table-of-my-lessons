let weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let d = new Date();
let today = weekdays[d.getDay()];
let some = [];
const root = ReactDOM.createRoot(document.getElementById("root"));

async function tick() {
  const res = await axios.get("./table.json");
  let table = res.data;

  const t = table.map((item) => {
    some.push(item);
    return (
      <tr key={item.id} id={item.id}>
        <td>{item.day}</td>
        <td>{item.times.physics}</td>
        <td>{item.times.chemistry}</td>
        <td>{item.times.bio}</td>
      </tr>
    );
  });

  let day = () => {
    switch (today) {
      case "sat":
        return (
          <tr id={some[0].id}>
            <td>{some[0].day}</td>
            <td>{some[0].times.physics}</td>
            <td>{some[0].times.chemistry}</td>
            <td>{some[0].times.bio}</td>
          </tr>
        );
        break;
      case "sun":
        return (
          <tr id={some[1].id}>
            <td>{some[1].day}</td>
            <td>{some[1].times.physics}</td>
            <td>{some[1].times.chemistry}</td>
            <td>{some[1].times.bio}</td>
          </tr>
        );
        break;
      case "mon":
        return (
          <tr id={some[2].id}>
            <td>{some[2].day}</td>
            <td>{some[2].times.physics}</td>
            <td>{some[2].times.chemistry}</td>
            <td>{some[2].times.bio}</td>
          </tr>
        );
        break;
      case "tue":
        return (
          <tr id={some[3].id}>
            <td>{some[3].day}</td>
            <td>{some[3].times.physics}</td>
            <td>{some[3].times.chemistry}</td>
            <td>{some[3].times.bio}</td>
          </tr>
        );
        break;
      case "wed":
        return (
          <tr id={some[4].id}>
            <td>{some[4].day}</td>
            <td>{some[4].times.physics}</td>
            <td>{some[4].times.chemistry}</td>
            <td>{some[4].times.bio}</td>
          </tr>
        );
        break;
      case "thu":
        return (
          <tr id={some[5].id}>
            <td>{some[5].day}</td>
            <td>{some[5].times.physics}</td>
            <td>{some[5].times.chemistry}</td>
            <td>{some[5].times.bio}</td>
          </tr>
        );
        break;
      case "fri":
        return (
          <tr id={some[6].id}>
            <td>{some[6].day}</td>
            <td>{some[6].times.physics}</td>
            <td>{some[6].times.chemistry}</td>
            <td>{some[6].times.bio}</td>
          </tr>
        );
        break;
    }
  };
  const ele = (
    <div className="container">
      <h2>محاضرات اليوم</h2>
      <table>
        <tr>
          <th>اليوم</th>
          <th>الفيزياء</th>
          <th>الكيمياء</th>
          <th>الاحياء</th>
        </tr>
        {day()}
      </table>
      <h2>جدول محاضرات الاسبوع</h2>
      <table className="table">
        <tr>
          <th>اليوم</th>
          <th>الفيزياء</th>
          <th>الكيمياء</th>
          <th>الاحياء</th>
        </tr>
        {t}
      </table>
    </div>
  );
  root.render(ele);
}

tick();
