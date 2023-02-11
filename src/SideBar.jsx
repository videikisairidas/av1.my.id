const server = ["VPS(Oracle)", "Ubuntu", "CloudPanel", "Nginx", "Apache", "Php-fpm", "MariaDB", "Git / github", "CronJob" ]
const listinfo = server.map((s) =>
  <div key={s.toString()}  > {s}</div>
);


function SideBar() {
  return (
    <div className="sidebar">
      <div>
        <h4>Server</h4>
        <div>
          {listinfo}
        </div>
      </div>
    </div>
  )
}

export default SideBar
