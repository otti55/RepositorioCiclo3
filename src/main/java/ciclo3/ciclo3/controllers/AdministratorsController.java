package ciclo3.ciclo3.controllers;

import ciclo3.ciclo3.entities.Administrators;
import ciclo3.ciclo3.entities.Category;
import ciclo3.ciclo3.entities.Reservations;
import ciclo3.ciclo3.services.AdministratorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Admin")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class AdministratorsController {

    @Autowired
    private AdministratorsService administratorsService;

    @RequestMapping("/all")
    public List<Administrators> getAdministrator(){
        return administratorsService.getAdministrators();
    }

    @GetMapping("/{id}")
    public Optional<Administrators> getAdministratorId(@PathVariable("id") int id){
        return administratorsService.getAdministratorsId(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Administrators saveAdministrators(@RequestBody Administrators administrators){
        return administratorsService.saveAdministrators(administrators);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Administrators update(@RequestBody Administrators administrators){
        return administratorsService.update(administrators);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){
        return administratorsService.deleteAdministrator(id);
    }
}
