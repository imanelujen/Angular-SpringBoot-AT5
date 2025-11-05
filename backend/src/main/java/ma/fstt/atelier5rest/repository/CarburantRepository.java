package ma.fstt.atelier5rest.repository;

import ma.fstt.atelier5rest.model.Carburant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarburantRepository extends JpaRepository<Carburant, Long> {
}
