package de.neuefische.raffael.backend.repository;

import de.neuefische.raffael.backend.model.Lane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaneRepository extends JpaRepository<Lane, Long> {
}
