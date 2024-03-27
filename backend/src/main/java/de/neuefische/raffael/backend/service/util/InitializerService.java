package de.neuefische.raffael.backend.service.util;

import de.neuefische.raffael.backend.model.*;
import de.neuefische.raffael.backend.repository.AccountRepository;
import de.neuefische.raffael.backend.repository.BoardRepository;
import de.neuefische.raffael.backend.repository.LaneRepository;
import de.neuefische.raffael.backend.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
@Slf4j
public class InitializerService implements ApplicationListener<ApplicationStartedEvent> {

    @Value("${init.active:false}")
    private boolean isInitActive;

    private final BoardRepository boardRepository;
    private final LaneRepository laneRepository;
    private final TaskRepository taskRepository;
    private final AccountRepository accountRepository;

    @Override
    public void onApplicationEvent(ApplicationStartedEvent event) {
        if (isInitActive) {
            log.info("Init started...");
            deleteAll();
            log.info("Create test data...");
            Account sysAcc = createSystemAccount();
            List<Board> boardList = createBoards(3);
            List<Board> updatedBoards = boardList.stream()
                    .peek(board -> createLanes(board, sysAcc)).toList();
            List<Board> boards = boardRepository.saveAll(updatedBoards);
            log.info(boards.toString());
            log.info("Test data created.");
        }
    }

    private void deleteAll() {
        log.info("Remove old data..");
        accountRepository.deleteAll();
        taskRepository.deleteAll();
        laneRepository.deleteAll();
        boardRepository.deleteAll();
        log.info("Data removed successfully.");
    }

    private List<Board> createBoards(int amount) {
        List<Board> boards = new ArrayList<>(0);
        for (int i = 0; i < amount; i++) {
            Board board = new Board();
            board.setDisplayName("My Dashboard " + i);
            boards.add(board);
        }
        return boards;
    }

    private Account createSystemAccount() {
        Account account = new Account();
        account.setDisplayName("System");
        return account;
    }

    private void createTasks(Lane lane, Account sysAcc) {
        Task task = new Task();
        task.setTitle("Init " + lane.getDisplayName() + " Lane");
        task.setSubTitle("Initialization");
        task.setDescription("Auto Generated");
        task.setAssignee(sysAcc);
        task.setState(lane.getState());
        lane.setTaskList(List.of(task));
    }

    private void createLanes(Board board, Account sysAcc) {
        List<Lane> laneList = Arrays.stream(State.values())
                .map(val -> {
                    Lane lane = new Lane();
                    lane.setState(val);
                    lane.setDisplayName(val.name());
                    createTasks(lane,sysAcc);
                    return lane;
                }).collect(Collectors.toList());
        board.setLanes(laneList);
    }
}
